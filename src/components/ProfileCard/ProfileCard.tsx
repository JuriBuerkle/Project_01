// rfc -> react functional component

interface Props {
    avatar?: string;
    name: string;
    description: string;
}


function ProfileCard(props: Props){
    const {avatar, name, description} = props;
    return (
        <div>
            <img src={avatar  || "https://via.placeholder.com/150"} alt={`${name}'s avatar`} />
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
}

export default ProfileCard;
