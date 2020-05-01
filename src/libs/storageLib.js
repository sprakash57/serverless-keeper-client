import { Storage } from "aws-amplify";

export async function s3Upload(file) {
    let stored;
    const filename = `${Date.now()}-${file.name}`;
    stored = await Storage.vault.put(filename, file, {
        contentType: file.type,
        level: "private"
    });
    return stored.key;
}