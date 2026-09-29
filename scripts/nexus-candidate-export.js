const crypto = require('node:crypto');

const PROJECT_ID = 'github:jonathanblunt1214-lgtm/The-Crucible';
const ALLOWED_KINDS = new Set(['prevention-candidate','learning-policy-candidate','test-evolution-candidate','hypothesis-successor-candidate']);

function sha(value) { return crypto.createHash('sha256').update(typeof value === 'string' ? value : JSON.stringify(value)).digest('hex'); }
function nonempty(value, name) { if (typeof value !== 'string' || !value.trim()) throw new Error(`${name} is required.`); return value.trim(); }

function buildCandidateEnvelope({ candidate, evidenceOutcomeIds, sourceCommit, generatedAt = new Date().toISOString() }) {
  if (!candidate || candidate.projectId !== PROJECT_ID) throw new Error('Candidate project identity is invalid.');
  if (!ALLOWED_KINDS.has(candidate.kind)) throw new Error('Candidate kind is not exportable by Learning-Worker.');
  nonempty(candidate.id,'candidate.id'); nonempty(candidate.claim,'candidate.claim'); nonempty(candidate.claimBoundary,'candidate.claimBoundary');
  if (!Array.isArray(evidenceOutcomeIds) || new Set(evidenceOutcomeIds).size < 2) throw new Error('At least two distinct evidence outcome ids are required.');
  nonempty(sourceCommit,'sourceCommit');
  const body = {
    schemaVersion:1, projectId:PROJECT_ID, candidateId:candidate.id, kind:candidate.kind,
    claim:candidate.claim, claimBoundary:candidate.claimBoundary, generalizationBoundary:candidate.generalizationBoundary || null,
    failureCode:candidate.provenance?.failureCode || null, canonicalFailureId:candidate.provenance?.canonicalFailureId || null,
    evidenceOutcomeIds:[...new Set(evidenceOutcomeIds)].sort(), candidateSha256:sha(candidate),
    source:{ repository:'jonathanblunt1214-lgtm/Learning-Worker', commit:sourceCommit },
    generatedAt, classification:'Insufficient Evidence', promotionAuthorized:false,
  };
  return Object.freeze({ ...body, envelopeSha256:sha(body) });
}

module.exports={PROJECT_ID,ALLOWED_KINDS,buildCandidateEnvelope};
