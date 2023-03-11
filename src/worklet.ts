class Option<T> {
	readonly #value: T;
	private constructor(value: T=null) {
		this.#value = value;
	}

	static Some<T>(value: T) {
		return new Option(value);
	}

	static None<T>() {
		return new Option<T>();
	}

	private get isNone() {
		return this.#value === null;
	}

	mapElse<R>(mapFn: (value: T) => R, alt: R) {
		return this.isNone ? mapFn(this.#value) : alt;
	}
}

const Some = Option.Some;
const None = Option.None;

class DitheredLinearGradientPainter {
	static readonly inputProperties = [
		"--gradient-col-1",
		"--gradient-col-2",
	];

	paint(c: CanvasRenderingContext2D, geometry: PaintSize, props: Map<string, unknown>) {
		console.log(props);

		const col1 = props.get("--gradient-col-1");
		const col2 = props.get("--gradient-col-2");

		console.log(col2);

		c.fillStyle = col2;
		c.fillRect(0, 0, geometry.width, geometry.height);

		c.fillStyle = col1;
		for (let i = 0; i < geometry.width * geometry.height; i++) {
			const x = i % geometry.width;
			const y = Math.floor(i / geometry.width);
			const yFrac = y / (geometry.height - 1);

			if (Math.random() >= yFrac) {
				c.fillRect(x, y, 1, 1);
			}
		}
		// c.putImageData(imageData, 0, 0);
	}
}

registerPaint("dithered-linear-gradient", DitheredLinearGradientPainter);


export default undefined;