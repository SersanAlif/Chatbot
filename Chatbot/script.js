document.getElementById("sendBtn").addEventListener("click", function () {
	const userInput = document.getElementById("userInput").value;
	if (userInput) {
		addMessage(userInput, "user");
		document.getElementById("userInput").value = "";

		// Mendapatkan respons dari chatbot
		const botResponse = getBotResponse(userInput);
		addMessage(botResponse, "bot");
	}
});

function addMessage(message, sender) {
	const messagesDiv = document.getElementById("messages");
	const messageDiv = document.createElement("div");
	messageDiv.className = `message ${sender}-message`;
	messageDiv.innerText = message;
	messagesDiv.appendChild(messageDiv);
	messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll ke bawah
}

function getBotResponse(input) {
	const responses = {
		"apa itu chatbot?": "Chatbot adalah program komputer yang dapat melakukan percakapan dengan pengguna.",
		"bagaimana cara kerja chatbot?": "Chatbot bekerja dengan menggunakan algoritma pemrosesan bahasa alami.",
		"apa manfaat chatbot?": "Chatbot dapat memberikan dukungan pelanggan 24/7 dan menghemat waktu.",
		"siapa yang membuat chatbot ini?": "Chatbot ini dibuat menggunakan JavaScript dan Bootstrap.",
		"apa itu AI?": "AI, atau kecerdasan buatan, adalah simulasi kecerdasan manusia dalam mesin.",
		"terima kasih": "Sama-sama! Jika ada pertanyaan lain, jangan ragu untuk bertanya.",
		"apa yang bisa kamu lakukan?": "Saya bisa menjawab pertanyaan umum dan membantu Anda dengan informasi yang dibutuhkan.",
	};

	// Mencari respons berdasarkan input yang diberikan
	return responses[input.toLowerCase()] || "Maaf, saya tidak mengerti pertanyaan itu. Silakan coba pertanyaan lain.";
}
