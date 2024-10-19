import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebase";

export const uploadVideo = async (file: File, fileName: string) => {
	try {
		const storageRef = ref(storage, `videos/${fileName}.mp4`);
		const upload = await uploadBytes(storageRef, file);
		const fileUrl = await getDownloadURL(upload.ref);
		if (fileUrl) {
			return fileUrl;
		}
	} catch (error) {
		console.error("Error uploading file: ", error);
		throw error;
	}
};
