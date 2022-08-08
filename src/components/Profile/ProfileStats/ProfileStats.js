export const ProfileStats = ({ label , quantity }) => {
    return <li>
      <span className="label">{label}</span>
      <span className="quantity">{quantity}</span>
    </li>
}