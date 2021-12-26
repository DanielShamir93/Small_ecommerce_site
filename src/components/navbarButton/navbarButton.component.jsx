import './navbarButton.styles.scss';

export default function NavbarButton({ term, reactIcon }) {

    return (
        <div>
            {reactIcon}
            <span className="term">{term}</span>
        </div>
    );

}