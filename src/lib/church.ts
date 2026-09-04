import type { Lang } from "./copy";

const TZ = "Asia/Dushanbe";

const TG_MONTHS = [
  "январ",
  "феврал",
  "март",
  "апрел",
  "май",
  "июн",
  "июл",
  "август",
  "сентябр",
  "октябр",
  "ноябр",
  "декабр",
];

export type Localized = { ru: string; tg: string };

export const locations: {
  city: Localized;
  role: Localized;
  address: Localized;
  note: Localized;
}[] = [
  {
    city: { ru: "Душанбе", tg: "Душанбе" },
    role: { ru: "Центральная церковь", tg: "Калисои марказӣ" },
    address: { ru: "ул. Борбада, 117", tg: "кӯч. Борбад, 117" },
    note: { ru: "Дом молитвы и штаб-квартира поля", tg: "Хонаи ибодат ва маркази майдон" },
  },
  {
    city: { ru: "Гиссар", tg: "Ҳисор" },
    role: { ru: "Община долины", tg: "Ҷамоати водӣ" },
    address: { ru: "город Гиссар", tg: "шаҳри Ҳисор" },
    note: { ru: "Одна из старейших общин республики", tg: "Яке аз ҷамоатҳои қадимтарини ҷумҳурӣ" },
  },
  {
    city: { ru: "Худжанд", tg: "Хуҷанд" },
    role: { ru: "Северная церковь", tg: "Калисои шимолӣ" },
    address: { ru: "город Худжанд", tg: "шаҳри Хуҷанд" },
    note: { ru: "Служение на севере Таджикистана", tg: "Хидмат дар шимоли Тоҷикистон" },
  },
  {
    city: { ru: "Турсунзаде", tg: "Турсунзода" },
    role: { ru: "Западная община", tg: "Ҷамоати ғарбӣ" },
    address: { ru: "город Турсунзаде", tg: "шаҳри Турсунзода" },
    note: { ru: "Церковь у западных ворот столицы", tg: "Калисо дар дарвозаи ғарбии пойтахт" },
  },
];

export const schedule = [
  {
    day: { ru: "Пятница", tg: "Ҷумъа" },
    time: "18:00",
    title: { ru: "Встреча субботы", tg: "Пешвози шанбе" },
    detail: {
      ru: "Тихий вечер: пение, молитва, слово накануне покоя.",
      tg: "Шоми ором: суруд, дуо, калима пеш аз истироҳат.",
    },
  },
  {
    day: { ru: "Суббота", tg: "Шанбе" },
    time: "10:00",
    title: { ru: "Субботняя школа", tg: "Мактаби шанбе" },
    detail: {
      ru: "Изучение Писания в группах — для взрослых и детей.",
      tg: "Омӯзиши Китоби Муқаддас дар гурӯҳҳо — барои калонсолон ва кӯдакон.",
    },
  },
  {
    day: { ru: "Суббота", tg: "Шанбе" },
    time: "11:30",
    title: { ru: "Богослужение", tg: "Ибодат" },
    detail: {
      ru: "Проповедь, хлебопреломление по расписанию, общее пение.",
      tg: "Ваъз, шикастани нон тибқи ҷадвал, суруди умумӣ.",
    },
  },
  {
    day: { ru: "Суббота", tg: "Шанбе" },
    time: "16:00",
    title: { ru: "Послеобеденное служение", tg: "Ибодати баъди чошт" },
    detail: {
      ru: "Беседа, молитва, время для гостей и новых друзей.",
      tg: "Суҳбат, дуо, вақт барои меҳмонон ва дӯстони нав.",
    },
  },
];

export const verses: { ref: Localized; text: Localized }[] = [
  {
    ref: { ru: "Матфея 11:28", tg: "Матто 11:28" },
    text: {
      ru: "Придите ко Мне, все труждающиеся и обремененные, и Я успокою вас.",
      tg: "Назди Ман биёед, эй ҳамаи ранҷкашидагон ва бори гарондоштагон, ва Ман ба шумо оромӣ медиҳам.",
    },
  },
  {
    ref: { ru: "Исход 20:8", tg: "Хуруҷ 20:8" },
    text: {
      ru: "Помни день субботний, чтобы святить его.",
      tg: "Рӯзи шанберо ёд дор, то онро муқаддас нигоҳ дорӣ.",
    },
  },
  {
    ref: { ru: "Откровение 3:20", tg: "Мукошофа 3:20" },
    text: {
      ru: "Се, стою у двери и стучу: если кто услышит голос Мой и отворит дверь, войду к нему.",
      tg: "Инк, дар назди дар истода мекӯбам: агар касе овози Маро шунида дарро кушояд, назди ӯ даромада, бо ӯ хӯрок мехӯрам.",
    },
  },
  {
    ref: { ru: "Исаия 58:13–14", tg: "Ишаъё 58:13–14" },
    text: {
      ru: "Если ты удержишь ногу твою ради субботы… то будешь иметь радость в Господе.",
      tg: "Агар пойи худро аз шанбе боз дорӣ… он гоҳ дар Худованд шодӣ хоҳӣ ёфт.",
    },
  },
  {
    ref: { ru: "Иоанна 14:27", tg: "Юҳанно 14:27" },
    text: {
      ru: "Мир оставляю вам, мир Мой даю вам; не так, как мир дает, Я даю вам.",
      tg: "Саломро ба шумо мегузорам, саломи Худро ба шумо медиҳам; на чунон ки ҷаҳон медиҳад, Ман ба шумо медиҳам.",
    },
  },
];

export function loc(value: Localized, lang: Lang) {
  return value[lang];
}

function dushanbeParts(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TZ,
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);

  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const weekdayMap: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };

  return {
    year: Number(get("year")),
    month: Number(get("month")),
    day: Number(get("day")),
    weekday: weekdayMap[get("weekday")] ?? 0,
  };
}

export function sabbathInfo(now = new Date()) {
  const local = dushanbeParts(now);
  const daysUntil = (6 - local.weekday + 7) % 7;
  const date = new Date(Date.UTC(local.year, local.month - 1, local.day + daysUntil));
  return {
    isToday: daysUntil === 0,
    daysUntil,
    date,
    year: date.getUTCFullYear(),
    month: date.getUTCMonth(),
    day: date.getUTCDate(),
  };
}

export function formatSabbathDate(info: ReturnType<typeof sabbathInfo>, lang: Lang) {
  if (lang === "ru") {
    return new Intl.DateTimeFormat("ru-RU", {
      day: "numeric",
      month: "long",
      timeZone: "UTC",
    }).format(info.date);
  }
  return `${info.day} ${TG_MONTHS[info.month]}`;
}

export function pluralDays(n: number, lang: Lang) {
  if (lang === "tg") return n === 1 ? "рӯз" : "рӯз";
  const n10 = n % 10;
  const n100 = n % 100;
  if (n10 === 1 && n100 !== 11) return "день";
  if (n10 >= 2 && n10 <= 4 && (n100 < 12 || n100 > 14)) return "дня";
  return "дней";
}

export function weekVerse(now = new Date()) {
  return isoWeekVerse(now);
}

export function isoWeekVerse(now = new Date()) {
  const local = dushanbeParts(now);
  const utc = Date.UTC(local.year, local.month - 1, local.day);
  const date = new Date(utc);
  const dayNum = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((date.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  return verses[week % verses.length] ?? verses[0];
}
