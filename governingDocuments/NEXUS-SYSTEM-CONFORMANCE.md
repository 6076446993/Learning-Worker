# Nexus System Conformance — Learning-Worker

This repository is an active component of the single Nexus system and conforms to the canonical `NEXUS-SYSTEM-INTEGRATION-CONTRACT.md` owned by Nexus architecture coordination.

## Component role
candidate extraction.

## Required behavior
- consume only authorized canonical learning inputs; emit candidate events preserving exact source hashes and lineage; extraction never upgrades knowledge state.
- Preserve canonical Nexus event identity, project identity, immutable version/commit references, lifecycle state, authority, evidence references, failure/remediation references, learning disposition, and lineage when present.
- Fail closed rather than silently dropping, reinterpreting, or strengthening mandatory canonical fields.
- Record blocked/rejected events with reasons and lineage.
- Recognize repair regressions as linked negative-evidence candidates; The Crucible retains failure-causality classification authority.
- Assimilation is obsolete: do not route new work through Assimilation or treat it as a lifecycle state or authority. Historical records may remain immutable history.

## Authority boundary
Conformance makes this repository a component of one Nexus system; it does not merge repository authority. This component may act only within its existing role and cannot infer VERIFIED, GOVERNED, or CUSTODIED from another weaker state.
