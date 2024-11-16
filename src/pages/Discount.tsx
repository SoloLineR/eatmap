export default function Discount() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center  text-my-red">
        Месяц гастрономических удовольствий!
      </h1>
      <h2 className="text-3xl mt-4 text-center ">
        Забронируйте столик в ресторанах партнёрах "ЕАТmap" и получите скидку
        10% используя промокод.
      </h2>
      <ul className="text-2xl flex flex-col gap-2 mt-4">
        <li className="flex flex-col gap-2 lg:flex-row  lg:items-center ">
          <p>9-14 июля - неделя японской кухни. Промокод: ЯПОНИЯmap</p>
          <img
            className="border-2  w-[200px]  "
            src="japan.png"
            alt=""
            loading="lazy"
          />
        </li>
        <li className="flex flex-col gap-2 lg:flex-row lg:items-center">
          <p>15-21 июля - неделя итальянской кухни Промокод: ИТАЛИЯmap</p>
          <img
            className="border-2  w-[200px]  "
            src="italy.png"
            alt=""
            loading="lazy"
          />
        </li>
        <li className="flex flex-col gap-2 lg:flex-row lg:items-center  ">
          <p>22-29 июля - неделя грузинской кухни Промокод: ГРУЗИЯmap</p>
          <img
            className="border-2  w-[200px]  "
            src="gorgia.png"
            alt=""
            loading="lazy"
          />
        </li>
      </ul>
      <p className=" text-2xl">
        Фестиваль "Гастрономическое удовольствие" 2-4 Августа 11:00-23:00
        Москва, музей-заповедник "Коломенское", главная площадь. <br /> 6
        ресторанов партнёров: Якитория,
        <br /> Зодиак, <br />
        Musson,
        <br /> Сыроварня,
        <br /> NUDLES by IVLEEVA,
        <br /> White Rabbit.
        <br /> Предоставят вам свои блюда для дегустации, и вам предстоит
        выбрать тот ресторан, который подарит вам лучшее гастрономическое
        удовольствие. Ешьте, гуляйте, танцуйте и получателя подарки за участие в
        фестивале.
      </p>
      <p> Участвует ли ресторан в акции можно узнать при бронировании.</p>
    </div>
  );
}
