# beacon-for-ibm-dotcom-api
Beacon for IBM.com Web API

## Build and deploy the Docker image

### Set environment
```bash
export IMAGE_NAME=beacon-for-ibm-dotcom
export IMAGE_VERSION=0.1.0  <--- Bump to the next version
```

### Build the image

```bash
docker build -t $IMAGE_NAME:$IMAGE_VERSION .
```

### Test the image

```bash
docker run -p 49160:8080 -d $IMAGE_NAME:$IMAGE_VERSION
```

then go to: `https://localhost:49160?url=https://www.ibm.com`

### Tag and push the image

```bash
# Set the repo URL
export REPO_URL=dbg-dds-beacon-docker-local.artifactory.swg-devops.com

docker tag $IMAGE_NAME:$IMAGE_VERSION $REPO_URL/$IMAGE_NAME:$IMAGE_VERSION

# log in if you haven't done so already
docker login $REPO_URL

# push the image
docker push $REPO_URL/$IMAGE_NAME:$IMAGE_VERSION
```

### Push to IBM Cloud

```bash
CF_DOCKER_PASSWORD=<YOUR-PASSWORD> ibmcloud cf push beacon-for-ibm-dotcom-api -f manifest.yml
```
