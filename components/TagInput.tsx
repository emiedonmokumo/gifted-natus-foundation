const TagInput = ({ editBlog, setEditBlog }: { editBlog: any, setEditBlog: any }) => {
    return (
        <div className="flex flex-col space-y-4">
            <input
                type="text"
                placeholder="Tags"
                className="border border-gray-300 p-2 rounded-md"
                value={editBlog.tags}
                onChange={(e) => setEditBlog({ ...editBlog, tags: e.target.value })}
            />
        </div>
    );
}

export default TagInput