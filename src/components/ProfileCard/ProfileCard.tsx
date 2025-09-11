// rfc -> react functional component
import styles from "./ProfileCard.module.css";

interface Props {
    avatar?: string;
    name: string;
    description: string;
}


function ProfileCard(props: Props){
    const {avatar, name, description} = props;
    const fallbackUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s";
    return (
        <div className={styles.container}>
            <img src={avatar  || fallbackUrl} alt={`${name}'s avatar`} />
            <h2 className={styles.name}>{name}</h2>
            <p>{description}</p>
        </div>
    );
}

export default ProfileCard;
