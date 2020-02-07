const React = require('react');
const classNames = require('classnames');

export class Card extends React.Component {
  render() {
    const {
      img,
      title,
      modifierClass,
      href,
    } = this.props;

    const cardClasses = classNames(
      'card',
      `card--${modifierClass}`
    );

    return (
      <a className={cardClasses} href={href}>
        <img className="card-img" src={img} />
        <h2 className="card-title">{title}</h2>
      </a>
    );
  }
}