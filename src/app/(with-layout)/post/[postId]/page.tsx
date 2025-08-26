import { MainLayout } from "@/components/common/MainLayout";
import { GetSinglePost } from "@/lib/services/post/GetSinglePost";

export default async function PostId({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;
  return (
    <MainLayout title="Post">
      <GetSinglePost postId={postId} />
    </MainLayout>
  );
}
