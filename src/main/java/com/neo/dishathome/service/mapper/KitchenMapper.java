package com.neo.dishathome.service.mapper;

import com.neo.dishathome.domain.*;
import com.neo.dishathome.service.dto.KitchenDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Kitchen and its DTO KitchenDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface KitchenMapper extends EntityMapper<KitchenDTO, Kitchen> {


    @Mapping(target = "dishes", ignore = true)
    Kitchen toEntity(KitchenDTO kitchenDTO);

    default Kitchen fromId(Long id) {
        if (id == null) {
            return null;
        }
        Kitchen kitchen = new Kitchen();
        kitchen.setId(id);
        return kitchen;
    }
}
