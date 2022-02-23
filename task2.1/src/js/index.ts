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

let previousIndex: number;

const getRandomArrayElement = (array: string[]): string => {
  let randomIndex:number = Math.floor(Math.random() * array.length);

  while (randomIndex === previousIndex) {
    randomIndex = Math.floor(Math.random() * array.length);
  }

  previousIndex = randomIndex;
  return array[randomIndex];
};

const setTextContent = (node: HTMLElement, array: string[]): void => {
  node.textContent = array[previousIndex];
};

const setBackgroundColor = (node: HTMLElement): void => {
  node.style.backgroundColor = getRandomArrayElement(colorsArray);
};

colorChangingButton.onclick = (): void => {
  setBackgroundColor(wrapper);
  setTextContent(colorLabel, colorsArray);
};
