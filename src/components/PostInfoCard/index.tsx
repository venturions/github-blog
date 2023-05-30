import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import { Post } from '@/types/posts'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface PostInfoCardProps {
  postData: Post
}

export function PostInfoCard({ postData }: PostInfoCardProps) {
  return (
    <div className="relative -mt-14 flex h-52 items-center justify-between gap-8 rounded-md bg-base-profile p-10 shadow-profileCard max-md:h-full max-md:flex-col max-sm:mx-4">
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-center justify-between max-xs:gap-2">
          <Link href="/">
            <button className="flex items-center gap-2">
              <FontAwesomeIcon
                className="text-blue"
                icon={faChevronLeft}
                size="xs"
              />
              <label className="cursor-pointer text-xs font-bold uppercase leading-normal text-blue">
                Voltar
              </label>
            </button>
          </Link>
          <a target="_blank" href={postData?.html_url} rel="noreferrer">
            <button className="flex items-center gap-2">
              <label className="cursor-pointer text-xs font-bold uppercase leading-normal text-blue">
                Ver no GitHub
              </label>
              <FontAwesomeIcon
                className="text-blue"
                icon={faArrowUpRightFromSquare}
                size="xs"
              />
            </button>
          </a>
        </div>
        <div className="mt-5">
          <h1 className="text-2xl font-bold leading-snug text-base-title">
            {postData?.title}
          </h1>
        </div>
        <div className="mt-6 flex gap-8 text-base-subtitle max-md:justify-between max-xs:flex-col">
          <div className="flex items-center gap-2 max-xs:justify-center">
            <FontAwesomeIcon
              className="text-base-label"
              icon={faGithub}
              size="lg"
            />
            <span>{postData.user?.login}</span>
          </div>

          <div className="flex items-center gap-2 max-xs:justify-center">
            <FontAwesomeIcon
              className="text-base-label"
              icon={faCalendarDay}
              size="lg"
            />
            <span>
              {postData?.created_at &&
                formatDistanceToNow(new Date(postData.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })}
            </span>
          </div>
          <div className="flex items-center gap-2 max-xs:justify-center">
            <FontAwesomeIcon
              className="text-base-label"
              icon={faComment}
              size="lg"
            />
            <span>{postData.comments} comentários</span>
          </div>
        </div>
      </div>
    </div>
  )
}
