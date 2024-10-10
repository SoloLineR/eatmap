import Card_item from "./Card_item";

export type place = {
  id: number;
  name: string;
  dist: number;
  img: string;
  mood: string;
  emptyTables: number;
  rating: number;
  popularityRating: number;
  address: string;
  phone: string;
  website: string;
  foodType: string;
};
const places: place[] = [
  {
    id: 1,
    name: "Кафе «Солнечный день»",
    dist: 2.5,
    img: "https://utfs.io/f/17qrxp3X86jaVSe3W9IdiDrwXgMYuKjZSUzNxCcsJ9bL2tG5",
    mood: "уютная",
    emptyTables: 5,
    rating: 4.5,
    popularityRating: 80,
    address: "ул. Солнечная, 10",
    phone: "+7 (123) 456-78-90",
    website: "sunnyday.ru",
    foodType: "Кафе",
  },
  {
    id: 2,
    name: "Ресторан «Морская звезда»",
    dist: 1.2,
    img: "https://utfs.io/f/17qrxp3X86ja70zgEYrsQS2ObAyjmVHWqL6DgcniB1KrNCho",
    mood: "романтическая",
    emptyTables: 2,
    rating: 4.7,
    popularityRating: 90,
    address: "ул. Морская, 5",
    phone: "+7 (123) 456-78-91",
    website: "seastar.ru",
    foodType: "Морепродукты",
  },
  {
    id: 3,
    name: "Пиццерия «Итальянский уголок»",
    dist: 0.8,
    img: "https://utfs.io/f/17qrxp3X86ja3PmDyO34SxJzWCZLpDd3hynRg0Bw8PFbKlQv",
    mood: "веселая",
    emptyTables: 10,
    rating: 4.3,
    popularityRating: 85,
    address: "ул. Итальянская, 3",
    phone: "+7 (123) 456-78-92",
    website: "italiancorner.ru",
    foodType: "Итальянская",
  },
  {
    id: 4,
    name: "Бургерная «Фаст Фуд»",
    dist: 1.0,
    img: "https://utfs.io/f/17qrxp3X86jaF8wbngwsNSqRXr984PlUwp7huGHICAyFgQEc",
    mood: "неформальная",
    emptyTables: 8,
    rating: 4.0,
    popularityRating: 75,
    address: "ул. Быстрая, 7",
    phone: "+7 (123) 456-78-93",
    website: "fastfood.ru",
    foodType: "Американская",
  },
  {
    id: 5,
    name: "Кофейня «Уютное место»",
    dist: 1.5,
    img: "https://utfs.io/f/17qrxp3X86jaBCdagBlkuGnpok1OZRdhNSrzX39BAWaqbxQl",
    mood: "спокойная",
    emptyTables: 4,
    rating: 4.6,
    popularityRating: 88,
    address: "ул. Уютная, 15",
    phone: "+7 (123) 456-78-94",
    website: "cozyplace.ru",
    foodType: "Кофе",
  },
  {
    id: 6,
    name: "Суши-бар «Японский рай»",
    dist: 2.0,
    img: "https://utfs.io/f/17qrxp3X86javpnaieZpP0ExLCJBy3DQFWsz9cnNZK4Uahbf",
    mood: "экзотическая",
    emptyTables: 3,
    rating: 4.8,
    popularityRating: 92,
    address: "ул. Японская, 6",
    phone: "+7 (123) 456-78-95",
    website: "japaneseparadise.ru",
    foodType: "Японская",
  },
  {
    id: 7,
    name: "Ресторан «Шашлычная»",
    dist: 3.0,
    img: "https://utfs.io/f/17qrxp3X86jaXsx2rtGdkeIRNpPrJLfghzZWbOVXKaY0jHmB",
    mood: "гостеприимная",
    emptyTables: 7,
    rating: 4.4,
    popularityRating: 78,
    address: "ул. Шашлычная, 9",
    phone: "+7 (123) 456-78-96",
    website: "shashlychnaya.ru",
    foodType: "Кавказская",
  },
  {
    id: 8,
    name: "Таверна «Старый город»",
    dist: 2.8,
    img: "https://utfs.io/f/17qrxp3X86jaqMXs8uV5KT6OV9sD7yfZkFPUL0BCzcXdreYx",
    mood: "традиционная",
    emptyTables: 1,
    rating: 4.2,
    popularityRating: 80,
    address: "ул. Городская, 12",
    phone: "+7 (123) 456-78-97",
    website: "oldtavern.ru",
    foodType: "Русская",
  },
  {
    id: 9,
    name: "Кондитерская «Сладкий рай»",
    dist: 0.6,
    img: "https://utfs.io/f/17qrxp3X86jaPrIix9lwbXKODFPfey0SEmtjUhB4JsMQdcGZ",
    mood: "сладкая",
    emptyTables: 6,
    rating: 4.9,
    popularityRating: 95,
    address: "ул. Сладкая, 4",
    phone: "+7 (123) 456-78-98",
    website: "sweetparadise.ru",
    foodType: "Десерты",
  },
  {
    id: 10,
    name: "Кафе «Зеленый чай»",
    dist: 1.1,
    img: "https://utfs.io/f/17qrxp3X86ja4wIASSA0bq0vt76xaCkhFp8YwfRVnoB5ErPj",
    mood: "тихая",
    emptyTables: 9,
    rating: 4.1,
    popularityRating: 76,
    address: "ул. Чайная, 8",
    phone: "+7 (123) 456-78-99",
    website: "greentea.ru",
    foodType: "Азиатская",
  },
  {
    id: 11,
    name: "Ресторан «Пивная кружка»",
    dist: 2.4,
    img: "https://utfs.io/f/17qrxp3X86ja8D7k4of4JV15DuwjaL09zgi2ErBQIRmU6Glk",
    mood: "дружелюбная",
    emptyTables: 2,
    rating: 4.3,
    popularityRating: 82,
    address: "ул. Пивная, 11",
    phone: "+7 (123) 456-78-100",
    website: "beermug.ru",
    foodType: "Европейская",
  },
  {
    id: 12,
    name: "Кафе «Вкусняшка»",
    dist: 0.9,
    img: "https://utfs.io/f/17qrxp3X86javfhKLIZpP0ExLCJBy3DQFWsz9cnNZK4Uahbf",
    mood: "уютная",
    emptyTables: 3,
    rating: 4.5,
    popularityRating: 87,
    address: "ул. Вкусная, 2",
    phone: "+7 (123) 456-78-101",
    website: "vkusnyashka.ru",
    foodType: "Фастфуд",
  },
  {
    id: 13,
    name: "Торговый центр «Гурман»",
    dist: 3.5,
    img: "https://utfs.io/f/17qrxp3X86jaIpeuQrlLkoe4V6cAi2CSxydlqDJmOtgZWnUv",
    mood: "разнообразная",
    emptyTables: 15,
    rating: 4.0,
    popularityRating: 70,
    address: "ул. Торговая, 1",
    phone: "+7 (123) 456-78-102",
    website: "gourmet.ru",
    foodType: "Разнообразная",
  },
  {
    id: 14,
    name: "Кафе «Семейный очаг»",
    dist: 1.6,
    img: "https://utfs.io/f/17qrxp3X86jaALpvS71sDdelOg1ZHE7ayoUp0ICMJRmPV4bx",
    mood: "семейная",
    emptyTables: 5,
    rating: 4.6,
    popularityRating: 89,
    address: "ул. Семейная, 3",
    phone: "+7 (123) 456-78-103",
    website: "familyhearth.ru",
    foodType: "Русская",
  },
  {
    id: 15,
    name: "Стейк-хаус «Мясной кут»",
    dist: 2.2,
    img: "https://utfs.io/f/17qrxp3X86jaqSeYBoV5KT6OV9sD7yfZkFPUL0BCzcXdreYx",
    mood: "классическая",
    emptyTables: 4,
    rating: 4.7,
    popularityRating: 91,
    address: "ул. Мясная, 7",
    phone: "+7 (123) 456-78-104",
    website: "meatcorner.ru",
    foodType: "Мясные блюда",
  },
  {
    id: 16,
    name: "Кафе «Оранжевый сок»",
    dist: 0.7,
    img: "https://utfs.io/f/17qrxp3X86jaXsx2rtGdkeIRNpPrJLfghzZWbOVXKaY0jHmB",
    mood: "освежающая",
    emptyTables: 10,
    rating: 4.8,
    popularityRating: 94,
    address: "ул. Оранжевая, 5",
    phone: "+7 (123) 456-78-105",
    website: "orangejuice.ru",
    foodType: "Напитки",
  },
];
export default function Card_list({
  sortType,
  SortTypeVibe,
}: {
  sortType: string;
  SortTypeVibe: string;
}) {
  console.log(sortType, SortTypeVibe);

  const sorting = (places: place[], sortType: string, sortTypeVibe: string) => {
    if (sortType === "" && sortTypeVibe === "") {
      return places;
    }

    // Фильтруем места по настроению
    let sorted = places;
    if (sortTypeVibe !== "любая" && sortTypeVibe !== "") {
      sorted = sorted.filter((place) => place.mood === sortTypeVibe);
    } else {
      sorted = places;
    }

    // Сортируем места по выбранному критерию
    if (sortType === "свободным местам") {
      sorted.sort((a, b) => b.emptyTables - a.emptyTables);
    }
    if (sortType === "рейтингу") {
      sorted.sort((a, b) => b.rating - a.rating);
    }
    if (sortType === "популярности") {
      sorted.sort((a, b) => b.popularityRating - a.popularityRating);
    }
    if (sortType === "дистанции") {
      sorted.sort((a, b) => a.dist - b.dist);
    }

    console.log(sorted);

    return sorted;
  };

  const sorted = sorting(places, sortType, SortTypeVibe);
  return (
    <div>
      <ul className="grid grid-cols-1 gap-6   lg:grid-cols-2">
        {sorted.map((item) => (
          <Card_item key={item.id} place={item} />
        ))}
      </ul>
    </div>
  );
}
