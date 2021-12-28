import React from "react";

class ProfileClass extends React.Component {
    render() {
        function montoToStr(num) {
            return num > 12 || num < 1
              ? null
              : 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(',')[
                  num - 1
            ];
        }

        return (
            <div className="welcome">
                <p className="welcome__header">Привет, <b>{this.props.name}</b>!</p>
                <p className="welcome__date">Дата регистарации: {this.props.registredAt.getDate()} {montoToStr(this.props.registredAt.getMonth())} {this.props.registredAt.getFullYear()}</p>
            </div>
        )
    }
}

export default ProfileClass;