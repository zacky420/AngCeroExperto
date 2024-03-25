import "../style.css";

const Skills: string[] = ["Bash", "Counter", "Healing"];

interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown: string;
}

const Strider = {
  name: "Strider",
  hp: "100",
  Skills: ["Bash", "Counter"],
};
