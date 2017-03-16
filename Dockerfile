FROM centos:7

ENV NODEJS_VERSION=v7.0.0
ENV PATH=/apps/node/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/bin
ENV NODE_ENV development

RUN yum -y install git make gcc gcc-c++ && yum -y clean all
RUN mkdir /apps && cd /apps && curl -s -L -O https://nodejs.org/dist/${NODEJS_VERSION}/node-${NODEJS_VERSION}-linux-x64.tar.xz && tar xf node-${NODEJS_VERSION}-linux-x64.tar.xz && mv node-${NODEJS_VERSION}-linux-x64 node

RUN mkdir /app

WORKDIR /app

ADD package.json /app/
RUN cd /app && npm install
ADD . /app
