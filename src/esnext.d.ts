declare global {
	interface CSS {
		paintWorklet: {
			addModule(url: string): PaintWorklet,
		};
	}

	interface PaintSize {
		width: number;
		height: number;
	}
}