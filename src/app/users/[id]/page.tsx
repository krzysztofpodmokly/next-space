import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { id } = await params;
  const user = await prisma.user.findUnique({ where: { id } });
  return {
    title: `User profile of ${user?.name}`,
  };
};

const UserProfile = async ({ params }: Props) => {
  const { id } = await params;
  const user = await prisma.user.findUnique({ where: { id } });
  const { name, bio, image } = user ?? {};

  return (
    <div>
      <h1>{name}</h1>
      <img width={300} src={image ?? "/mememan.webp"} alt={`${name}'s profile`} />
      <h3>Bio</h3>
      <p>{bio}</p>
    </div>
  );
};

export default UserProfile;
