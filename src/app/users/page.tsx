import UserCard from "@/components/user-card/UserCard";
import { prisma } from "@/lib/prisma";

import styles from "./page.module.css";

type Props = {};

const Users = async (props: Props) => {
  const users = await prisma.user.findMany();

  return (
    <div className={styles.grid}>
      {users.map((user) => {
        return <UserCard key={user.id} {...user} />;
      })}
    </div>
  );
};

export default Users;
