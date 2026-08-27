import { useParams } from "react-router-dom";
import Single from "../../components/single/Single";
import { userRows } from "../../data";
import "./user.scss";

const User = () => {
  const { id } = useParams();

  const user = userRows.find(
    (item) => item.id === Number(id)
  );

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="user">
      <Single
        id={user.id}
        title={`${user.firstName} ${user.lastName}`}
        img={user.img}
        info={{
          username: user.email.split("@")[0],
          fullname: `${user.firstName} ${user.lastName}`,
          email: user.email,
          phone: user.phone,
          status: user.verified ? "verified" : "unverified",
        }}
        chart={{
          dataKeys: [],
          data: [],
        }}
        activities={[]}
      />
    </div>
  );
};

export default User;