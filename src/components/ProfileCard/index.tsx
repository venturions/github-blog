import Image from "next/image";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { User } from "@/types/users";

interface ProfileCardProps {
  user: User;
}

export function ProfileCard({ user }: ProfileCardProps) {
  return (
    <div className="relative -mt-14 flex h-52 items-center justify-between gap-8 rounded-md bg-base-profile p-10 shadow-profileCard max-md:h-full max-md:flex-col max-sm:mx-4">
      <div>
        <Image
          className="rounded-lg"
          src={user?.avatar_url}
          alt={"Foto do seu avatar do GitHub"}
          width={148}
          height={148}
        />
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-center justify-between max-xs:flex-col max-xs:gap-2">
          <h1 className="text-2xl leading-normal text-base-title">
            {user?.name}
          </h1>
          <button className=" flex items-center gap-2">
            <label className="text-xs font-bold uppercase leading-normal text-blue">
              Github
            </label>
            <FontAwesomeIcon
              className="text-blue"
              icon={faArrowUpRightFromSquare}
              size="xs"
            />
          </button>
        </div>
        <p className="text-gray-500 text-base font-normal leading-normal text-base-text">
          {user?.bio}
        </p>
        <div className="mt-6 flex gap-6 text-base-subtitle max-md:justify-between max-sm:flex-col max-sm:justify-center">
          <div className="flex items-center gap-2 max-xs:justify-center">
            <FontAwesomeIcon
              className="text-base-label"
              icon={faGithub}
              size="lg"
            />
            <span>{user?.login}</span>
          </div>

          <div className="flex items-center gap-2 max-xs:justify-center">
            <FontAwesomeIcon
              className="text-base-label"
              icon={faBuilding}
              size="lg"
            />
            <span>{user?.company}</span>
          </div>
          <div className="flex items-center gap-2 max-xs:justify-center">
            <FontAwesomeIcon
              className="text-base-label"
              icon={faUserGroup}
              size="lg"
            />
            <span>{user.followers} seguidores</span>
          </div>
        </div>
      </div>
    </div>
  );
}
