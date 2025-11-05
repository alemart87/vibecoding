# Publishing Guide for create-vibecoding

## Prerequisites

1. **npm account**: You need an npm account. Create one at https://www.npmjs.com/signup
2. **npm login**: Login to npm from your terminal:
   ```bash
   npm login
   ```

## Testing Locally Before Publishing

### Option 1: Using npm link (Recommended for testing)

1. Navigate to the create-vibecoding directory:
   ```bash
   cd create-vibecoding
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a global link:
   ```bash
   npm link
   ```

4. Now you can test it from anywhere:
   ```bash
   create-vibecoding test-project
   ```

5. To unlink when done testing:
   ```bash
   npm unlink -g create-vibecoding
   ```

### Option 2: Using npx with local path

1. Navigate to a test directory (outside the project):
   ```bash
   cd /tmp
   ```

2. Run with npx using the local path:
   ```bash
   npx /path/to/vibecoding/create-vibecoding test-project
   ```

### Option 3: Manual testing

1. Navigate to the create-vibecoding directory:
   ```bash
   cd create-vibecoding
   ```

2. Make the script executable (if not already):
   ```bash
   chmod +x index.js
   ```

3. Run it directly:
   ```bash
   node index.js test-project
   ```

## Publishing to npm

### First Time Publishing

1. Make sure you're in the create-vibecoding directory:
   ```bash
   cd create-vibecoding
   ```

2. Install dependencies (if not already):
   ```bash
   npm install
   ```

3. Check if the package name is available:
   ```bash
   npm search create-vibecoding
   ```

4. If the name is taken, update the name in package.json

5. Publish the package:
   ```bash
   npm publish
   ```

### Publishing Updates

1. Update the version in package.json following semver:
   - Patch: 1.0.0 → 1.0.1 (bug fixes)
   - Minor: 1.0.0 → 1.1.0 (new features, backwards compatible)
   - Major: 1.0.0 → 2.0.0 (breaking changes)

   Or use npm version:
   ```bash
   npm version patch  # for bug fixes
   npm version minor  # for new features
   npm version major  # for breaking changes
   ```

2. Publish the new version:
   ```bash
   npm publish
   ```

## Verify Publication

After publishing, you can verify:

1. Check on npm website:
   ```
   https://www.npmjs.com/package/create-vibecoding
   ```

2. Try installing it:
   ```bash
   npx create-vibecoding test-install
   ```

## Package Scope (Optional)

If you want to publish under an organization/scope:

1. Update package.json name:
   ```json
   {
     "name": "@your-username/create-vibecoding",
     ...
   }
   ```

2. Publish as public (scoped packages are private by default):
   ```bash
   npm publish --access public
   ```

## Best Practices

1. **Test thoroughly** before publishing
2. **Use semantic versioning** (semver)
3. **Update README.md** with any changes
4. **Keep dependencies updated**
5. **Add a CHANGELOG.md** to track changes between versions
6. **Use npm pack** to preview what will be published:
   ```bash
   npm pack
   ```
   This creates a .tgz file you can inspect

## Unpublishing (Use with caution!)

You can unpublish within 72 hours of publishing:

```bash
npm unpublish create-vibecoding@1.0.0
```

**Warning**: Unpublishing can break projects that depend on your package. Use with extreme caution.

## Additional Resources

- [npm Publishing Guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [Semantic Versioning](https://semver.org/)
- [npm CLI Documentation](https://docs.npmjs.com/cli/)
