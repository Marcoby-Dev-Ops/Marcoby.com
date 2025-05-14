import axios from "axios";
import React, { useState, useEffect } from "react";

interface ImportMetaEnv {
	readonly VITE_SPEEDOFME_API_KEY: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

const useSpeedtest = () => {
	const apikey = import.meta.env.VITE_SPEEDOFME_API_KEY;
	const [downloadData, setDownloadData] = useState<number[]>([]);
	const [uploadData, setUploadData] = useState<number[]>([]);
	const [latencyData, setLatencyData] = useState<number[]>([]);
	const [jitterData, setJitterData] = useState<number[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	console.log(apikey);
	useEffect(() => {
		const speedTest = async () => {
			setIsLoading(true);
			setDownloadData([]);
			setUploadData([]);
			setLatencyData([]);
			setJitterData([]);
			setDownloadData([]);

			const reponse = await axios.get("https//speedof.me");
		};
	}, []);

	return <div>useSpeedtest</div>;
};

export default useSpeedtest;
