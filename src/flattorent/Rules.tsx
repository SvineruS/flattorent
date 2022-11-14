import React from 'react';


function Rules() {
    return (
      <div>

          <h2 className="text-center mt-5">Контакти</h2>

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
                      <li>Куріння в квартирі: <b>Заборонено</b></li>
                      <li>Тварини в квартирі: <b>Заборонено</b></li>
                      <li>Вікове обмеження: <b>від 25 років</b></li>
                      <li>Передоплата: <b>Потрібна, у розмірі вартості першої доби проживання</b></li>
                      <li>Застава: <b>Потрібна, у розмірі вартості першої доби проживання</b></li>
                      <li>Наявність у гостя документів, що засвідчують особу: <b>Обов'язково</b></li>
                      <li>Оренда квартири для святкування Дня Народження, Нового Року чи будь-якого
                          іншого масового заходу:
                          <b>Можлива після особистого спілкування </b></li>
                  </ul>


              </div>
              <div className="col-lg-6">
                  <ul>
                      <li>Час заселення: <b>13:00</b></li>
                      <li>Час виселення: <b>12:00</b></li>
                      <li>Мінімальний термін оренди квартири складає: <b>1 добу</b></li>
                      <li>Доплата за одного гостя: <b>+50 грн</b></li>
                      <li>Звітні документи: <b>Надаються</b></li>
                      <li>Цілодобове поселення: <b>Так </b></li>
                      <li>Мінімальний термін бронювання квартири:
                          <ul>
                              <li>на період Новорічних свят: <b>10 діб </b></li>
                              <li>на період травневих свят: <b>5 діб </b></li>
                              <li>на літній період: <b>3 доби </b></li>
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
