#!/bin/bash
. ~/.bash_profile
docker-compose -f docker/compose/docker-compose.yml build --no-cache  && docker-compose -f docker/compose/docker-compose.yml up
