import "../styles/style.scss";

const colorsArray: string[] = [
  "rgb(133, 122, 200)",
  "#f1f5f8",
  "green",
  "red",
  "#f15025",
  "rgba(80 160 240)",
  "hsl(60, 50%, 50%)",
];

const wrapper: HTMLDivElement = document.querySelector(".wrapper");
const colorLabel: HTMLSpanElement = document.querySelector(".color");
const colorChangingButton: HTMLButtonElement = document.querySelector(".color-changing-button");

let backgroundColor: string

const generateHexColor = ():void => {
  backgroundColor = `#${(Math.random().toString(16) + "000000").substring(2,8)}`
}

const generateRgbColor = ():void => {
  const r = Math.floor(Math.random()*256);
  const g = Math.floor(Math.random()*256);
  const b = Math.floor(Math.random()*256);
  backgroundColor = `rgb(${r},${g},${b})`
}

const setTextContent = (node: HTMLElement): void => {
  node.textContent = backgroundColor;
};

const setBackgroundColor = (node: HTMLElement): void => {
  node.style.backgroundColor = backgroundColor;
};

colorChangingButton.onclick = (): void => {
  generateHexColor()
  setBackgroundColor(wrapper);
  setTextContent(colorLabel);
};
