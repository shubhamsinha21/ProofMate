import crypto from "crypto";

export function generatedHash(data:object): string {
    const json = JSON.stringify(data);
    return crypto.createHash("sha256").update(json).digest("hex");
}