from rest_framework.generics import *
from rest_framework.mixins import *
from rest_framework.response import Response
from .serializers import *
import psycopg2
from psycopg2 import sql
from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT


def isDB(db_name, username, password, create=True):
    con = psycopg2.connect(dbname='postgres',
                           user='postgres',
                           password='',
                           port='5432',
                           host='localhost')
    con.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
    cur = con.cursor()
    if create:
        cur.execute(sql.SQL(f"CREATE DATABASE {db_name}"))
        cur.execute(
            sql.SQL(f"CREATE USER {username} with encrypted password '{password}';"))
        cur.execute(
            sql.SQL(f"GRANT ALL PRIVILEGES ON DATABASE {db_name} TO {username};"))
    else:
        cur.execute(sql.SQL(f"DROP DATABASE {db_name}"))
    return True if cur else False


class ApiDBView(ListCreateAPIView, CreateModelMixin, UpdateModelMixin, DestroyModelMixin):
    queryset = DBSModel.objects.all()
    serializer_class = DBSSerializer

    def perform_create(self, serializer):
        db_name = self.request.data.get("name")
        username = self.request.data.get("username")
        password = self.request.data.get("password")
        db = isDB(db_name, username, password)
        serializer.save()
        if db:
            return Response({'status': True, 'created': True})
        else:
            return Response({'status': True, 'err': 'DB not created'})

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, *kwargs)

    def delete(self, request, *args, **kwargs):
        r_id = request.data.get('id')
        db = DBSModel.objects.filter(id=r_id)
        if db.exists():
            isDB(db.name, db.username, db.password, create=False)
            db.delete()
            return Response({'status': True, 'deleted_id': r_id})
        else:
            return Response({'status': True, 'err': 'object not found'})
