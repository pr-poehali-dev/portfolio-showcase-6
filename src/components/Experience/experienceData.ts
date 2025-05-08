
export interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  description: string;
  skills: string[];
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
}

export const experiences: ExperienceItem[] = [
  {
    period: "2022 — настоящее время",
    title: "Старший библиотекарь",
    company: "Национальная библиотека",
    description:
      "Руководство отделом редких книг и рукописей, курирование выставок и создание цифровых копий исторических документов.",
    skills: [
      "Архивирование",
      "Реставрация",
      "Цифровизация",
      "Исследовательская работа",
    ],
    icon: "BookOpen",
  },
  {
    period: "2020 — 2022",
    title: "Редактор электронных изданий",
    company: 'Издательский дом "Литера"',
    description:
      "Разработка электронных версий книг с интерактивными элементами и оптимизация для различных устройств чтения.",
    skills: ["Вёрстка", "TypeScript", "E-Publishing", "Типографика"],
    icon: "Edit",
  },
  {
    period: "2018 — 2020",
    title: "Шрифтовой дизайнер",
    company: 'Студия "Буквица"',
    description:
      "Создание оригинальных кириллических шрифтов для цифровых изданий и фирменных стилей компаний.",
    skills: [
      "Типографика",
      "Каллиграфия",
      "Шрифтовой дизайн",
      "Adobe Creative Suite",
    ],
    icon: "Type",
  },
];

export const skills: Skill[] = [
  { name: "Оцифровка редких изданий", level: 95 },
  { name: "Разработка электронных книг", level: 90 },
  { name: "Каллиграфия", level: 88 },
  { name: "Реставрация документов", level: 95 },
  { name: "Исследование рукописей", level: 85 },
  { name: "Шрифтовой дизайн", level: 92 },
];
