// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract ProofMate {
    struct TeamProof {
        string teamId;
        string agreementHash;
        uint256 timestamps;
    }

    mapping(string => TeamProof) public teamProofs;

    event TeamProofStored(
        string teamId,
        string agreementHash,
        uint256 timestamp
    );

    function storeTeamProof(
        string memory teamId,
        string memory agreementHash
    ) public {
        teamProofs[teamId] = TeamProof(teamId, agreementHash, block.timestamp);

        emit TeamProofStored(teamId, agreementHash, block.timestamp);
    }

    function getTeamProof(
        string memory teamId
    ) public view returns (TeamProof memory) {
        return teamProofs[teamId];
    }
}
