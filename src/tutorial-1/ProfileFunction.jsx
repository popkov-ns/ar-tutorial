export const ProfileFunction = (props) => {
    function montoToStr(num) {
        return num > 12 || num < 1
          ? null
          : 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(',')[
              num - 1
        ];
    }

    return (
        <div className="welcome">
            <p className="welcome__header">Привет, <b>{props.name}</b>!</p>
            <p className="welcome__date">Дата регистарации: {props.registredAt.getDate()} {montoToStr(props.registredAt.getMonth())} {props.registredAt.getFullYear()}</p>
        </div>
    )
}
