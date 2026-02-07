# 🚀 Subdomain Deployment Guide for blogs.a063.xyz

## ✅ What's Been Fixed

The middleware has been updated to:
1. ✅ Detect `blogs.a063.xyz` subdomain
2. ✅ Rewrite all requests to `/blog` path internally
3. ✅ Redirect `a063.xyz/blog` → `blogs.a063.xyz` (301)
4. ✅ Preserve blog post slugs: `blogs.a063.xyz/my-post` → serves `/blog/my-post`
5. ✅ Added debug logging to track middleware behavior

## 📋 Deployment Steps

### Step 1: Commit and Push Changes

```bash
git add middleware.ts
git commit -m "Fix subdomain routing for blogs.a063.xyz"
git push origin main
```

### Step 2: Verify Vercel Configuration

In your Vercel dashboard:

1. Go to **Settings** → **Domains**
2. Ensure `blogs.a063.xyz` is listed and pointing to **Production**
3. **IMPORTANT**: Make sure there are NO custom rewrites in Vercel settings that might conflict

### Step 3: Redeploy

After pushing, Vercel will automatically deploy. Wait for deployment to complete.

### Step 4: Clear Cache

After deployment:
1. In Vercel dashboard, go to your project
2. Click **Deployments** → Latest deployment
3. Click the **⋯** menu → **Redeploy**
4. Check "Clear build cache"

### Step 5: Test in Production

Open these URLs and verify:

| URL | Expected Result |
|-----|----------------|
| `https://a063.xyz` | ✅ Shows home page |
| `https://a063.xyz/blog` | ✅ Redirects to `https://blogs.a063.xyz` |
| `https://blogs.a063.xyz` | ✅ Shows blog listing page |
| `https://blogs.a063.xyz/[slug]` | ✅ Shows individual blog post |

### Step 6: Check Logs

To debug if something isn't working:

1. Go to Vercel dashboard → Your project
2. Click **Logs** (or **Functions** → **Edge Middleware**)
3. Look for `[Middleware]` log entries
4. You should see:
   ```
   [Middleware] Hostname: blogs.a063.xyz
   [Middleware] Base Hostname: blogs.a063.xyz
   [Middleware] Pathname: /
   [Middleware] Blog subdomain detected
   [Middleware] Rewriting to: /blog
   ```

## 🧪 Local Testing

To test locally:

1. **Edit hosts file** (as Administrator):
   ```
   C:\Windows\System32\drivers\etc\hosts
   ```
   
   Add:
   ```
   127.0.0.1 blogs.localhost
   ```

2. **Run dev server**:
   ```bash
   npm run dev
   ```

3. **Test URLs**:
   - `http://localhost:3000` → home page
   - `http://blogs.localhost:3000` → blog page
   - `http://blogs.localhost:3000/my-post` → blog post

## 🔍 Troubleshooting

### Issue: Still showing `a063.xyz/blog` in URL

**Cause**: Middleware not running or old deployment cached

**Fix**:
1. Ensure middleware.ts is at project root (not in src/)
2. Redeploy with cache cleared
3. Hard refresh browser (Ctrl + Shift + R)
4. Check Vercel logs for middleware execution

### Issue: Home page showing on `blogs.a063.xyz`

**Cause**: Middleware rewrite not working

**Fix**:
1. Check Vercel logs for `[Middleware]` entries
2. Verify `/blog/page.tsx` exists at `src/app/blog/page.tsx`
3. Ensure no conflicting rewrites in Vercel settings
4. Check that `blogs.a063.xyz` domain is pointing to the correct project

### Issue: 404 on blog posts

**Cause**: Dynamic route not found

**Fix**:
1. Verify `src/app/blog/[slug]/page.tsx` exists
2. Check that the slug parameter matches your blog post URLs
3. Review middleware logs to see the rewritten path

## 📊 Expected URL Behavior

### Production URLs:

```
User visits: https://blogs.a063.xyz
Browser shows: https://blogs.a063.xyz
Next.js serves: /blog (listing page)

User visits: https://blogs.a063.xyz/my-first-post
Browser shows: https://blogs.a063.xyz/my-first-post
Next.js serves: /blog/my-first-post

User visits: https://a063.xyz/blog
Browser redirects to: https://blogs.a063.xyz
Next.js serves: /blog

User visits: https://a063.xyz/blog/my-post
Browser redirects to: https://blogs.a063.xyz/my-post
Next.js serves: /blog/my-post
```

## 🎯 Key Points

1. **Middleware is at root**: `middleware.ts` must be at project root, not in `src/`
2. **No vercel.json needed**: All routing handled by middleware
3. **Vercel domain config**: `blogs.a063.xyz` should point to Production environment
4. **Cache matters**: Always clear cache when testing routing changes
5. **Logs are your friend**: Check Vercel logs to see middleware execution

## ✨ Once Deployed Successfully

You can remove the `console.log` statements from middleware.ts for cleaner production logs.

---

**Need help?** Check the Vercel logs first, they'll show exactly what the middleware is doing!
