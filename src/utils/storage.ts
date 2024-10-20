import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebase";

export const uploadVideo = async (file: File, year: string, userId: string) => {
	try {
		const storageRef = ref(storage, `${userId}/${year}/video.mp4`);
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

export const uploadQRCode = async (
	dataUrl: string,
	year: string,
	userId: string
) => {
	try {
		const storageRef = ref(storage, `${userId}/${year}/qrCode.png`);
		const response = await fetch(dataUrl);
		const blob = await response.blob();
		const upload = await uploadBytes(storageRef, blob);
		const fileUrl = await getDownloadURL(upload.ref);
		if (fileUrl) {
			return fileUrl;
		}
	} catch (error) {
		console.error("Error uploading file: ", error);
		throw error;
	}
};
