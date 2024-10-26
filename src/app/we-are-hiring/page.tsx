import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink } from "lucide-react";
import posts from "@/data/posts";
import { CountdownTimer } from "@/components/CountdownTimer";
import { POST } from "@/types/post";

interface PostCardProps {
  post: POST;
}

const isPostExpired = (expiryDate: Date): boolean => {
  return new Date(expiryDate) <= new Date();
};

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const expired = isPostExpired(post.expiresOn);

  return (
    <Card
      className={`
        bg-[#1A1A2E]/50 border-[#2A2A4A] backdrop-blur-sm 
        ${expired ? "opacity-75" : "hover:border-purple-500/50"} 
        transition-colors shadow-lg relative
      `}
    >
      <CardHeader>
        <CardTitle className="text-white mb-5 text-lg xl:text-xl">{post.title}</CardTitle>
        <CardDescription className="text-gray-300">
          {post.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow space-y-4">
        {/* Dates Section */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Calendar size={16} />
            <span>Posted: {new Date(post.postedOn).toLocaleDateString()}</span>
          </div>

          {!expired && <CountdownTimer expiresOn={post.expiresOn} />}
        </div>

        <Button
          className={`
            w-full gap-2 shadow-md
            ${
              expired
                ? "bg-gray-600 cursor-not-allowed opacity-50"
                : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0"
            }
          `}
          asChild={!expired}
          disabled={expired}
        >
          {expired ? (
            <span>Position Closed</span>
          ) : (
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              Apply Now
              <ExternalLink size={16} />
            </a>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default function Page() {
  const sortedPosts = [...posts].sort((a, b) => {
    const aExpired = isPostExpired(a.expiresOn);
    const bExpired = isPostExpired(b.expiresOn);
    if (aExpired === bExpired) {
      return new Date(b.postedOn).getTime() - new Date(a.postedOn).getTime();
    }
    return aExpired ? 1 : -1;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0F1A] via-[#1A1A2E] to-[#2A1A3A] text-white">
      <div className="container mx-auto py-16 px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            We&apos;re Hiring!
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join our rebellion and help us push the boundaries of what&apos;s
            possible.
          </p>
        </div>

        {sortedPosts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sortedPosts.map((post, index) => (
              <PostCard key={index} post={post} />
            ))}
          </div>
        ) : (
          <Card className="max-w-2xl mx-auto bg-[#1A1A2E]/50 border-[#2A2A4A] backdrop-blur-sm shadow-lg">
            <CardContent className="text-center py-12">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                No Positions Available
              </h3>
              <p className="text-gray-300 mb-6">
                We don&apos;t have any positions right now, but the rebellion is
                always growing!
              </p>
              <Button
                variant="outline"
                className="border-purple-500/50 text-purple-300 hover:bg-purple-500/20"
              >
                Check Back Later
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
