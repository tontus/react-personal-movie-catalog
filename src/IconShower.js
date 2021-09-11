
import { FaBeer } from 'react-icons/fa';
function IconShower(props) {
    if (props.watched === true)
        return (
            <FaBeer />
        )
    else
        return (
            <div> Dekhi nai</div>
            )
    
}
export default IconShower;