import React from 'react';


function Rules() {
    return (
      <div>

          <h2 className="text-center mt-5">Контакты</h2>

          <div className="row">
              <div className="col-md-3 d-flex justify-content-center align-items-center">
                  <img className="rounded-circle w-100 my-2" src={`${process.env.PUBLIC_URL}/images/roman.jpg`} alt=""
                       style={{maxWidth: "200px"}}/>
              </div>
              <div className="col">
                  <div className="text-nowrap contact-info portfolio-info-card" style={{fontSize: "1.1rem"}}>

                      <CardRow icon="fa-user"><span>Роман</span></CardRow>
                      <PhoneNumber number={"+380931448404"}/>
                      <PhoneNumber number={"+380661156505"}/>
                      <PhoneNumber number={"+380978997882"}/>
                      <PhoneNumber number={"+380662762476"}/>
                      <CardRow icon="fa-telegram-plane">
                          <a href="https://t.me/FlatToRent" className="text-primary">@FlatToRent</a>
                      </CardRow>

                  </div>
              </div>
          </div>


          <h2 className="text-center mt-5">Информация</h2>
          <div className="row">
              <div className="col-lg-6">
                  <ul>
                      <li>Курение в апартаментах: <b>Запрещено </b></li>
                      <li>Пребывание с животными: <b>Запрещено </b></li>
                      <li>Возрастное ограничение: <b>от 25 лет </b></li>
                      <li>Предоплата: <b>Требуется, в размере стоимости первых суток проживания </b></li>
                      <li>Залог: <b>Требуется, в размере стоимости первых суток проживания </b></li>
                      <li>Наличие у гостя документов, удостоверяющих личность: <b>Обязательно </b></li>
                      <li>Аренда объекта для празднования Дня Рождения, Нового Года или любого
                          другого массового мероприятия:
                          <b>Возможна после личного общения </b></li>
                  </ul>


              </div>
              <div className="col-lg-6">
                  <ul>
                      <li>Время заселения: <b>13:00 </b></li>
                      <li>Время выселения: <b>12:00 </b></li>
                      <li>Минимальный срок аренды квартиры составляет: <b>1 сутки </b></li>
                      <li>Доплата за одного гостя: <b>+50 грн</b></li>
                      <li>Отчетные документы: <b>Предоставляются </b></li>
                      <li>Круглосуточное поселение: <b>Да </b></li>
                      <li>Минимальный срок бронирования квартиры:
                          <ul>
                              <li>на период Новогодних праздников: <b>10 суток </b></li>
                              <li>на период майских праздников: <b>5 суток </b></li>
                              <li>на летний период: <b>3 суток </b></li>
                          </ul>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
    );
}


function PhoneNumber({number}: { number: string }) {
    return <CardRow icon="fa-viber">
        <a href={"tel:" + number} className="text-primary">{number}</a>
    </CardRow>;
}

function CardRow({icon, children}: { icon: string, children: React.ReactNode }) {
    return <div className="row">
        <div className="col-1 "><i className={"fab icon " + icon}></i></div>
        <div className="col-9">{children}</div>
    </div>
}

export default Rules;
