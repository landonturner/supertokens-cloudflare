#!/bin/bash
# there is a bug with wrangler where dependencies that don't compile will
# leave zombie workerd processes around, this finds them and kills them
pid=$(ps aux | grep '@cloudflare/workerd-darwin-arm64/bin/workerd' | grep -v grep | awk '{ print $2 }')
if [ -n "${pid}" ]; then
    echo "Detected zombie backend process, killing pid ${pid}"
    kill ${pid}
fi
npm run dev:start
