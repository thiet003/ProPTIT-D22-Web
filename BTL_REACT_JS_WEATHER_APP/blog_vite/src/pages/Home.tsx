import { useState } from 'react'
import { Button } from '@/components/ui/button'
import PostCard from '@/components/PostCard'

// Mock data for posts
const posts = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  title: `Blog Post ${i + 1}`,
  description: 'This is a short description of the blog post...',
  topic: 'Programming',
  tags: ['#news', '#proptit_picnic', '#ai'],
}))

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 5
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>
          <div className="grid gap-6">
            {currentPosts.map((post, index) => (
              <PostCard key={post.id} {...post} isHighlighted={index === 0} />
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <Button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <span className="mx-4">
              Page {currentPage} of {Math.ceil(posts.length / postsPerPage)}
            </span>
            <Button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={indexOfLastPost >= posts.length}
            >
              Next
            </Button>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Topics and Tags</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Topics</h3>
            <div className="flex flex-wrap gap-2">
              {['JavaFX', 'C++', 'C'].map((topic) => (
                <Button key={topic} variant="outline" size="sm">
                  {topic}
                </Button>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {['#news', '#proptit_picnic', '#ai'].map((tag) => (
                <Button key={tag} variant="outline" size="sm">
                  {tag}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">About the Author</h3>
            <p>Brief bio about the author goes here...</p>
            <div className="mt-2">
              <Button variant="outline" size="sm">
                Twitter
              </Button>
              <Button variant="outline" size="sm" className="ml-2">
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}