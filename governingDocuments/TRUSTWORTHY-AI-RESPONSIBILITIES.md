# Trustworthy AI Responsibilities — Learning Worker

This repository implements the Nexus Trustworthy AI Governance Contract only within Learning-Worker's existing candidate-extraction authority.

## Required controls
- Preserve source identity, source version, extraction version, and candidate lineage.
- Preserve known uncertainty, extraction limitations, failed checks, and provenance.
- Treat generated or extracted material as candidate evidence, never verified knowledge.
- Do not infer governance approval, custody, or Crucible verification.
- Preserve privacy/data-boundary requirements applicable to source intake.
- Make candidate evidence challengeable by retaining references needed for downstream review.
- Fail closed when mandatory lineage/provenance or oversight handoff fields are absent.
- Preserve historical rejected/superseded candidates rather than rewriting them as accepted.
- Route governance defects through existing failure/repair mechanisms without granting the worker new authority.

The Nexus shared contract is authoritative for architecture-wide semantics. This document does not expand Learning-Worker authority.