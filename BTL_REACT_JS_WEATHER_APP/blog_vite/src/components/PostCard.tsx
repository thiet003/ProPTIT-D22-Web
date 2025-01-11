import { Link } from 'react-router-dom'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface PostCardProps {
  id: number
  title: string
  description: string
  topic: string
  tags: string[]
  isHighlighted?: boolean
}

export default function PostCard({ id, title, description, topic, tags, isHighlighted = false }: PostCardProps) {
  return (
    <Card className={`${isHighlighted ? 'md:col-span-2' : ''} flex flex-col`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground mb-2">{topic}</p>
        <p>{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Link to={`/post/${id}`}>
          <Button>Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}