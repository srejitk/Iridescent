let codeBlocks = document.querySelectorAll("pre code");
codeBlocks.forEach((codeBlock) => {
	let code = codeBlock.innerHTML;
	code = code.replaceAll("<", "&lt;");
	codeBlock.innerHTML = code;
});
