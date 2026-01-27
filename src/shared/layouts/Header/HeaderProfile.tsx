interface User {
    avatar: string;
    username: string;
    role: string;
}

interface UserProfileProps {
    user: User;
}

const UserProfile = ({ user }: UserProfileProps) => {
    return (
        <div className="flex items-center gap-3">
            <img src={user.avatar} alt="avatar" className="w-11 h-11 rounded-full" />
            <div className="flex flex-col justify-center">
                <span className="font-bold text-sm">{user.username}</span>
                <span className="text-xs text-gray-500">{user.role}</span>
            </div>
        </div>
    );
};

export default UserProfile;
