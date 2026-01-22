
interface User {
    avatar: string;
    username: string;
    role: string;
};

interface UserProfileProps {
    user: User;
}

const UserProfile = ({ user }: UserProfileProps) => {
    return (
        <div className="flex gap-[20px] ">
            <img src={user.avatar} alt="avatar" className="w-[44px] h-[44px]" />
            <div className="flex flex-col   justify-center">
                <span className="font-bold text-sm">{user.username}</span>
                <span className="font-semibold text-xs">{user.role}</span>
            </div>
        </div>
    )
}
export default UserProfile;