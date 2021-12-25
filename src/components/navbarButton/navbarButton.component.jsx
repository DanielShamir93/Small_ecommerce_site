import './navbarButton.styles.scss';

export default function({ term, reactIcon }) {

    return (
        <div>
            {reactIcon}
            <span className="term">{term}</span>
        </div>
    );

}