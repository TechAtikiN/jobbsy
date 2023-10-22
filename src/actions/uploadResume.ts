export async function uploadResume(data: FormData) {
    const file = data.get("resume");
    console.log(file);
}
