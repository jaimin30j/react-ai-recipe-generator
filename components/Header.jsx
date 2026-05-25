import chefClaudeIcon from '../images/chef-claude-icon.png';

function Header() {
    return (
        <header>
            <div className="logo">
                <img src={chefClaudeIcon} alt="Chef Claude" />
                <span>Jaimin's Chef Recipe</span>
            </div>
        </header>
    )
}
    
export default Header;