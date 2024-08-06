sc.Combat.inject({
  onVarAccess(fullName, varPath) {
    if (varPath[0] == 'combat') {
      var entityName = varPath.slice(2).join('.'),
        entityName = entityName ? entityName.replace(/\//g, '.') : null;

      switch (varPath[1]) {
        case 'cnt': {
          return ig.game
            .getEntitiesByType('Enemy')
            .filter((e) => e.enemyName === entityName).length;
        }
      }
    }

    return this.parent(fullName, varPath);
  },
});
